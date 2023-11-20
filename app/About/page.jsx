import HeroPage from "../components/Hero-page";
export default function AboutPage() {
  return (
    <div className="w-screen bg-lightBrown">
      <HeroPage />
      <div className="w-10/12 mx-auto py-24 text-cyan-950">
        <div className="w-8/12 mx-auto">
          <h2 className="font-bold text-center mb-2">
            Providing Quality Dental Care for Over 20 Years
          </h2>
          <p className="text-sm font-medium text-center">
            Our dental practice in Fermoy, Co Cork, Ireland has a rich history.
            Founded in 1998, we have grown to become one of the leading dental
            practices in the area. With a focus on providing exceptional care
            and utilising the latest technology, we are dedicated to helping our
            patients achieve and maintain healthy smiles.
          </p>
        </div>
      </div>
    </div>
  );
}
