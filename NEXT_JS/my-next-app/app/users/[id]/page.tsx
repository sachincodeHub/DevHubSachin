import { Suspense } from "react";

type UserProfileProps = {
  params: Promise<{ id: string }>;
};

export default function UserProfile({ params }: UserProfileProps) {
  return (
    <Suspense fallback={<p>Loading user profile...</p>}>
      <UserDetails params={params} />
    </Suspense>
  );
}

async function UserDetails({ params }: UserProfileProps) {
  const { id } = await params;

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
}