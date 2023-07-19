const config = {
    summer: {
        text: "Nóng",
        iconName: ""
    },
    winter: {
        text: "Lạnh",
        iconName: ""
    },
}
export default function Season(prop) {
  const {  month,lat } = prop;
 if(month > 2 && month <9){
    return lat >= 0? "summer": "winter"
 }else {
    return lat >= 0? "winter": "summer"
 }

 const {text, iconName} = config({month, lat})
  
  return (
    <div className="row season">
        {text}
        {iconName}
    </div>
  );
}
