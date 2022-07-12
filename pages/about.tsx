import withHead from '#components/hoc/withHead';
import Profile from '#components/Profile';

function About() {
  return (
    <div>
      <Profile />
    </div>
  );
}

export default withHead(About);
