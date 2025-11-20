import { Icon } from "next/dist/lib/metadata/types/metadata-types";

type prop={
  name:string,
  index:number
}
export default function MainContent({name,index}:prop) {
  console.log(index);
    return(

      <div className="flex justify-center items-center">{name}</div>
    );
}
