
import MembershipsFacilities from "../components/memberships/Facilities"
import MembershipsHero from "../components/memberships/Hero"
import MembershipsPrograms from "../components/memberships/Programs"
import MembershipsPackages from "../components/memberships/Packages"

const MembershipsPage = () => {
  return (
    <div>
      <MembershipsHero />
      <MembershipsFacilities />
      <MembershipsPrograms />
      <MembershipsPackages />
    </div>
  )
}

export default MembershipsPage
