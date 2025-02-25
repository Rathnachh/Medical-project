import Head from 'next/head'
import Image from 'next/image'

const Brand = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <main className="flex flex-wrap justify-center sm:justify-between items-center gap-4">
        <div className="w-20 sm:w-auto">
          <Image src="/brand/step.svg" alt="Steps" width={81} height={32} className="w-full h-auto" />
        </div>
        <div className="w-20 sm:w-auto">
          <Image src="/brand/mango.svg" alt="Mango" width={81} height={32} className="w-full h-auto" />
        </div>
        <div className="w-20 sm:w-auto">
          <Image src="/brand/goal.svg" alt="Goal" width={81} height={32} className="w-full h-auto" />
        </div>
        <div className="w-20 sm:w-auto">
          <Image src="/brand/food.svg" alt="Food" width={81} height={32} className="w-full h-auto" />
        </div>
        <div className="w-20 sm:w-auto">
          <Image src="/brand/book.svg" alt="Book-Off" width={81} height={32} className="w-full h-auto" />
        </div>
        <div className="w-20 sm:w-auto">
          <Image src="/brand/save.svg" alt="Saves" width={81} height={32} className="w-full h-auto" />
        </div>
      </main>
    </div>
  )
}

export { Brand };
