import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full mx-auto text-center ">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/dflogo.svg"
            alt="DF Logo"
            width={200}
            height={200}
            className="w-50 h-50"
          />
        </div>

        {/* Monospace Text Section */}
        <div className="space-y-6">
          <h1 className="font-mono text-4xl lg:text-5xl tracking-tight text-foreground">
            datafruit
          </h1>
          
          <div className="font-mono text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            <p>if you thought this was cool ...</p>
            <p>we&apos;d love to talk!</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Link
            href="https://cal.com/venkatl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-mono font-medium text-accent-foreground bg-accent hover:opacity-90 transition-opacity duration-200 shadow-lg"
          >
            book a call
          </Link>
        </div>
      </div>
    </main>
  )
}