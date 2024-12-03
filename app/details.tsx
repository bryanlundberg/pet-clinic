import HeaderInformation from "@/components/header-information";
import ProgressForm from "@/components/progress-form";
import StandardContainer from "@/components/standard-container";

export default function Details() {
  return (
    <>
      <StandardContainer backgroundColor="#F1F8FF">
        <HeaderInformation />
        <ProgressForm />
      </StandardContainer>
    </>
  );
}
