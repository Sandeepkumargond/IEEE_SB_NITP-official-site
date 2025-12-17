import CommunitiesSection from "@/components/CommunitiesSection";
export default function Home() {
  const router = useRouter();
  const rows = chunkArray(DOMAINS, 3);
  const [openDomain, setOpenDomain] = useState(null);

  function handleDomainClick(domainKey) {
    const domain = DOMAINS.find(d => d.key === domainKey);
    if (domain && domain.teams && domain.teams.length > 0) {
      router.push(`/teams/${domain.teams[0].key}`);
      return;
    }
    router.push(`/teams/${domainKey}`);
  }

  function handleTeamClick(domainKey, teamKey, e) {
    e.stopPropagation();
    router.push(`/teams/${teamKey}`);
  }

  return (
    <div>
        </div>
  )
}