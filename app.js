import ImageUploader from "./components/ImageUploader";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">AI Image Caption Generator</h1>
        <ImageUploader />
      </div>
    </div>
  );
}

export default App;
