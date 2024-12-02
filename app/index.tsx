import ContentInformation from "@/components/content-information";
import HeaderInformation from "@/components/header-information";
import Offer from "@/components/offer";
import StandardContainer from "@/components/standard-container";
import Tips from "@/components/tips";
import { Image } from "react-native";

export default function Index() {
  return (
    <StandardContainer>
      <HeaderInformation />
      <ContentInformation />
      <Offer />
      <Image
        source={require("@/assets/images/home/pics.png")}
        style={{
          width: "100%",
          objectFit: "cover",
          marginTop: 40,
        }}
        height={1500}
        width={1500}
      />

      <Tips />
    </StandardContainer>
  );
}
