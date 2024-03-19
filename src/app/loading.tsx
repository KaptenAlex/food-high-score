
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-2xl">What are your colleagues eating?! 😋</h1>
      <p>This is a simple app to track what your colleagues are eating.</p>
      <p>To be able to see your restaurant that you ate at, you need register the restaurant</p>
      <FoodListSkeleton />
    </main>
  )
}


// Used for suspense fallback in page.tsx
const FoodListSkeleton = () => {
  return (
    <ul className="mt-4 w-full flex gap-3 flex-col">
      <li className="w-full rounded-lg flex justify-between gap-4 p-4 bg-white text-black blur-sm">
        <p># 1</p>
        <p>Votes: 5</p>
        <p>Restaurant 1</p>
        <p>Link</p>
      </li>
      <li className="w-full rounded-lg flex justify-between gap-4 p-4 bg-white text-black blur-sm">
        <p># 2</p>
        <p>Votes: 3</p>
        <p>Restaurant 2</p>
        <p>Link</p>
      </li>
      <li className="w-full rounded-lg flex justify-between gap-4 p-4 bg-white text-black blur-sm">
        <p># 3</p>
        <p>Votes: 1</p>
        <p>Restaurant 3</p>
        <p>Link</p>
      </li>
    </ul>
  )
}