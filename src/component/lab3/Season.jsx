const config = {
  summer: {
    text: "Nóng",
    iconName: "fa-regular fa-sun",
    background: "#ff6a00", 
  },
  winter: {
    text: "Lạnh",
    iconName: "fa-regular fa-snowflake",
    background: "#3494E6", 
  },
};

export default function Season(prop) {
  const { month, lat } = prop;
  const season = month > 2 && month < 9 ? (lat >= 0 ? "summer" : "winter") : lat >= 0 ? "winter" : "summer";
  const { text, iconName, background } = config[season];

  return (
    <div className="row position-relative">
      <div className={`col-6 season font`} style={{backgroundColor: background}}>
      {text}
      <i className={`${iconName} fs-1`}></i>
    </div>
    </div>
  );
}
