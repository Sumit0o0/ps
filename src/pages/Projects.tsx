import Card from "../components/Card";

const Projects = () => {
  return (
    <div className="grid grid-cols-12  gap-x-6">
      {/* <h1 className="text-center">Projects in progress...</h1> */}
      <Card
        GitURL="woodbone#readme"
        name="Woodbone - Ecommerce Website"
        desc="Woodbone is Fullstack Ecommerce website which provides online shopping. Made with Nodejs, MongoDB, Express and EJS."
        author="Sumit Kumar"
      />
      <Card
        GitURL="dopamin#readme"
        name="DopaMin - PC Gaming Library"
        desc="DopaMin is Gaming Data Library website which provides data about pc gaming. Made with React and fecth API."
        author="Sumit Kumar"
      />
    </div>
  );
};

export default Projects;
