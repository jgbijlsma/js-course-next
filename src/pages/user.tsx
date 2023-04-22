type User = {
  name: {
    first: string;
    last: string;
  };
};

export default function User({ user }: { user: User }) {
  return (
    <div>
      <h1>
        Welcome {user?.name.first} {user?.name.last}
      </h1>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  return {
    props: {
      user: data.results[0],
    },
  };
}
