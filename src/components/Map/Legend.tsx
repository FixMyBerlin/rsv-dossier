export const Legend = () => {
  return (
    <div className="flex h-14 items-center justify-around bg-[#F2F2F2] text-base text-gray-500">
      <div className="flex flex-row items-center gap-2">
        <span className="h-1 w-10 bg-[#34D399]" /> <p>Vorzugstrasse</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className="h-1 w-10 bg-[#BDD334]" /> <p>Variante</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className="h-1 w-10 bg-[#5B5C5D]" /> <p>Verworfen</p>
      </div>
    </div>
  )
}
