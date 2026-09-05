import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const suffix = formData.get('suffix') || '';

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Format base filename to lowercase with hyphens
    const parsed = path.parse(file.name);
    let cleanBase = parsed.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // If suffix is specified (e.g. 'description'), append it unless already present
    if (suffix) {
      const cleanSuffix = suffix
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

      if (cleanSuffix && !cleanBase.endsWith(cleanSuffix)) {
        cleanBase = `${cleanBase || 'image'}-${cleanSuffix}`;
      }
    }

    // Always convert to .webp
    const baseName = `${cleanBase || 'image'}.webp`;

    // Upload directory path
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    // Ensure directory exists
    await mkdir(uploadDir, { recursive: true });

    // Handle collision if a file with the same name already exists
    let finalName = baseName;
    let counter = 1;
    while (fs.existsSync(path.join(uploadDir, finalName))) {
      finalName = `${cleanBase || 'image'}-${counter}.webp`;
      counter++;
    }

    // Convert image to WebP format using lossless compression
    let webpBuffer;
    try {
      // Attempt conversion preserving animation if animated GIF/WebP
      webpBuffer = await sharp(buffer, { animated: true })
        .webp({ lossless: true, effort: 4 })
        .toBuffer();
    } catch (animErr) {
      // Fallback for static image conversion
      webpBuffer = await sharp(buffer)
        .webp({ lossless: true, effort: 4 })
        .toBuffer();
    }

    // Write converted WebP file to disk
    const filePath = path.join(uploadDir, finalName);
    await writeFile(filePath, webpBuffer);

    const publicUrl = `/uploads/${finalName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: finalName,
      format: 'webp',
      lossless: true,
      originalName: file.name,
    });
  } catch (error) {
    console.error('Error uploading and converting image to WebP:', error);
    return NextResponse.json(
      { error: 'Failed to process and upload image' },
      { status: 500 }
    );
  }
}
