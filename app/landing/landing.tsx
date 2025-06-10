import testPhoto from "../assets/IMG_8255.jpg";

export function Landing() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <img
        src={testPhoto}
        alt="Test Photo"
        className="w-full h-auto rounded-xl"
      />
      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-500 dark:text-gray-400">📍 Indianapolis, IN</p>
        <p className="text-base text-gray-800 dark:text-gray-100">
          A peaceful afternoon capturing the city’s unique skyline and street art vibes.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500">Taken: June 2025</p>
      </div>
    </div>
  );
}