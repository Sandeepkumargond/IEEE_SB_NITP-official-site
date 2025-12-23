import { fetchTeamMembers } from "@/lib/adminAction";

export default async function TeamPage({ params }) {
  const { team } = await params || {};

  if (!team) {
    return (
      <>
        <main className="min-h-[80vh] flex items-center justify-center">
          <p className="text-lg font-semibold text-gray-600">
            Team not specified
          </p>
        </main>
      </>
    );
  }

  // Fetch members based on team slug
  const result = await fetchTeamMembers(team);

  if (!result.success) {
    return (
      <>
        <main className="min-h-[80vh] flex items-center justify-center">
          <p className="text-red-500 font-semibold">
            Failed to load team data
          </p>
        </main>
      </>
    );
  }

  const members = result.data;

  return (
    <>
      <main className="min-h-[80vh] px-6 sm:px-10 lg:px-24 py-14">
        {/* Heading */}
        <h2 className="text-center mb-12 text-3xl sm:text-4xl font-extrabold tracking-widest uppercase">
          {team.replace("-", " ")} Team
        </h2>

        {/* Empty State */}
        {members.length === 0 ? (
          <p className="text-center text-gray-500">
            No members found for this team.
          </p>
        ) : (
          <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div
                key={member._id}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition"
              >
                {/* Profile Image */}
                <img
                  src={member.profilePic || "/avatar.png"}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover border"
                />

                {/* Name */}
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {member.name}
                </h3>

                {/* Team */}
                <p className="text-sm text-gray-500 capitalize">
                  {member.team}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mt-4">
                  {member.githubLink && (
                    <a
                      href={member.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-black font-medium"
                    >
                      GitHub
                    </a>
                  )}

                  {member.linkedInLink && (
                    <a
                      href={member.linkedInLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
