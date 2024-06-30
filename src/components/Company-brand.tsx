import Head from 'next/head'
import Image from 'next/image'

const Brand = () => {
  return (
    <div className="container mx-auto">
      <main className="flex justify-between items-center w-full max-w-[1728px] h-[152px] px-14 py-36">
        <div>
          <Image src="/brand/step.svg" alt="Steps" width={81} height={32}  />
        </div>
        <div>
          <Image src="/brand/mango.svg" alt="Mango" width={81} height={32}  />
        </div>
        <div>
          <Image src="/brand/goal.svg" alt="Goal" width={81} height={32}  />
        </div>
        <div>
          <Image src="/brand/food.svg" alt="Food" width={81} height={32}  />
        </div>
        <div>
          <Image src="/brand/book.svg" alt="Book-Off" width={81} height={32}  />
        </div>
        <div>
          <Image src="/brand/save.svg" alt="Saves" width={81} height={32}  />
        </div>
      </main>
    </div>
  )
}

export { Brand };
