import PhotoGrid from "./PhotoGrid";

export default function FeaturedPhotos(props) {
  return (
    <main className="text-center p-4">
      <h1>Featured photos</h1>
      <h4>
        Editors' choice. Explore <a href="#papa">featured photos</a>.
      </h4>
      <PhotoGrid />
    </main>
  );
}
