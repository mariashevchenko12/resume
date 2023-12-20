import { Navbar } from "@/ui/components/Navbar"
import { navbar } from "@/constants/navbar"
import { AboutContainer } from "@/ui/components/AboutContainer"
import { Footer } from "@/ui/components/Footer"
import { footer } from "@/constants/footer"
import { aboutContainer } from "@/constants/main"

export default function Home() {
  return (
    <>
      <Navbar name={navbar.name} position={navbar.position} menuItems={navbar.menuItems} />
      <main className="flex-1 bg-main-gradient">
        <AboutContainer
          social={aboutContainer.social}
          firstName={aboutContainer.firstName}
          lastName={aboutContainer.lastName}
          position={aboutContainer.position}
          subtitle={aboutContainer.subtitle}
          description={aboutContainer.description}
        />
      </main>
      <Footer linkedin={footer.linkedin} telegram={footer.telegram} email={footer.email} number={footer.number} />
    </>
  )
}
