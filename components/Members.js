import CardMember from "./CardMember";
const names = [
  "Farrux Abrorkulov",
  "Jaloliddin Esonboyev",
  "Nigora Imomova",
  "Jack Wilsher",
];
const roles = [
  "Loyiha asoschisi, marketolog",
  "Web dizayner",
  "Kopirayer",
  "Grafik dizayner",
];
const socials = [
  { tg: "", ig: "", fb: "" },
  { tg: "", ig: "", fb: "" },
  { tg: "", ig: "", fb: "" },
  { tg: "", ig: "", fb: "" },
];
function Members() {
  return (
    <div className="members">
      <h3 className="about-title">Bizning jamoa</h3>

      <div className="members-body">
        <CardMember
          img={0}
          name={names[0]}
          role={roles[0]}
          socials={socials[0]}
        />
        <CardMember
          img={1}
          name={names[1]}
          role={roles[1]}
          socials={socials[1]}
        />
        <CardMember
          img={2}
          name={names[2]}
          role={roles[2]}
          socials={socials[2]}
        />
        <CardMember
          img={3}
          name={names[3]}
          role={roles[3]}
          socials={socials[3]}
        />
      </div>
    </div>
  );
}

export default Members;
