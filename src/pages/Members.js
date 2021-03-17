import Members from '../components/Members'

function MembersPage(prop) {
  return (
    <>
      <div className="page-title">
        <h1 id="title">LES MEMBRES DU PROJET</h1>
      </div>
      <div className="members">
        <Members/>
      </div>
    </>
  );
}

export default MembersPage;
