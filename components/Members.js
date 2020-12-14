import CardMember from "./CardMember";

function Members() {
  return (
    <div className="members">
      <h3 className="about-title">Bizning jamoa</h3>

      <div className="members-body">
        <CardMember />
        <CardMember />
        <CardMember />
        <CardMember />
      </div>
    </div>
  );
}

export default Members;
