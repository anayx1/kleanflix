import React from 'react'
import HomeHero from '@/components/hompeage/HomeHero'
import ConsistencySection from '@/components/hompeage/ConsistencySection'
import SolveOrBuildSection from '@/components/hompeage/SolveOrBuildSection'
import EnvironmentsSection from '@/components/hompeage/EnvironmentsSection'
import ProblemSolveSection from '@/components/hompeage/ProblemSolveSection'
import SystemLevelSection from '@/components/hompeage/SystemLevelSection'
import IntegratedSystemsSection from '@/components/hompeage/IntegratedSystemsSection'
import MoveForwardSection from '@/components/hompeage/MoveForwardSection'
import ControlSection from '@/components/hompeage/ControlSection'
import StructuredProductionSection from '@/components/hompeage/StructuredProductionSection'
import GlobalExportSection from '@/components/hompeage/GlobalExportSection'
import WhyKleanfixSection from '@/components/hompeage/WhyKleanfixSection'
import ConsistentOutputSection from '@/components/hompeage/ConsistentOutputSection'
import TestimonialsSection from '@/components/hompeage/TestimonialsSection'
import SystemControlCtaSection from '@/components/hompeage/SystemControlCtaSection'

const page = () => {
    return (
        <main className="min-h-screen bg-white">
            <HomeHero />
            <ConsistencySection />
            <SolveOrBuildSection />
            <EnvironmentsSection />
            <ProblemSolveSection />
            <SystemLevelSection />
            <IntegratedSystemsSection />
            <MoveForwardSection />
            <ControlSection />
            <StructuredProductionSection />
            <GlobalExportSection />
            <WhyKleanfixSection />
            <ConsistentOutputSection />
            <TestimonialsSection />
            {/* <SystemControlCtaSection /> */}
        </main>
    )
}

export default page