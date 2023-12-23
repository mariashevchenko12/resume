import { AboutContainer } from "@/ui/components/AboutContainer"
import { aboutContainer } from "@/constants/main"

export default function Home() {
  return (
    <main className="flex-1 bg-main-gradient pt-44">
      <AboutContainer
        social={aboutContainer.social}
        firstName={aboutContainer.firstName}
        lastName={aboutContainer.lastName}
        position={aboutContainer.position}
        subtitle={aboutContainer.subtitle}
        description={aboutContainer.description}
      />
    </main>
  )
}
