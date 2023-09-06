import CustomContainer from "@/components/CustomContainer/CustomContainer";
import Title from "@/components/Title";

const About = () => {
  return (
    <CustomContainer bgColor={"#111"}>
      <Title>
        <span>Monumen Pahlawan Perang Kemerdekaan</span>
        <br />
        <span>Republik Indonesia 1945</span>
      </Title>
      <div className="flex flex-col gap-5 text-sm md:text-base lg:text-lg xl:text-xl mt-10">
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          praesentium esse iure ipsa quibusdam sit repudiandae, at commodi
          tempora provident minima explicabo doloremque ducimus voluptas natus?
          Veritatis facilis tempore impedit! Non voluptates rem delectus fuga
          veniam. Nulla beatae quam nesciunt illo fuga temporibus dicta facilis
          iure doloribus error earum, rem autem voluptate, esse ab recusandae
          iusto fugiat sint, perferendis dolorem.
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quia
          nulla reprehenderit numquam autem ipsam sunt ad asperiores?
          Exercitationem eligendi quod deserunt alias totam beatae repellendus
          eaque id consequuntur necessitatibus. Fugit veniam, laboriosam,
          architecto ducimus, molestiae deserunt saepe exercitationem ad
          consectetur unde sequi! Corrupti nam obcaecati architecto dolorum
          tempora, omnis quia itaque, ipsa vitae atque totam, hic delectus ab
          iure.
        </p>
      </div>
    </CustomContainer>
  );
};

export default About;
