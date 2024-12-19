import {forwardRef} from 'react'

export const PdfContent = forwardRef<HTMLDivElement, {name: string; level: string; skill: string}>(
  ({name, level, skill}, ref) => {
    const data = new Date()
    const year = data.getFullYear()
    const month = data.getMonth() + 1
    const day = data.getDate()

    return (
      <div
        ref={ref}
        className="relative w-[900px] h-[595px] mx-auto bg-no-repeat bg-cover bg-center rounded-lg border-[10px] border-blue-400 shadow-xl"
        style={{
          backgroundImage: "url('/Certificate.png')", // Ensure your background image path is correct
        }}
      >
        {/* Outer Border */}
        <div className="absolute inset-0 border-[8px] border-dashed border-blue-300 rounded-lg"></div>

        {/* Certificate Title */}
        <p className="absolute top-[120px] left-[50%] transform -translate-x-1/2 text-[28px] font-bold text-[#60B3FF] tracking-wide">
          Certificate of Achievement
        </p>

        {/* Subtitle */}
        <p className="absolute top-[185px] left-[50%] transform -translate-x-1/2 text-[20px] font-medium text-[#000]">
          The Certificate is Proudly Presented to
        </p>

        {/* Recipient's Name */}
        <p className="absolute top-[230px] left-[50%] transform -translate-x-1/2 text-[36px] font-serif italic font-bold text-[#0C3C58]">
          {name}
        </p>

        {/* Horizontal Divider */}
        <div className="absolute top-[290px] left-[50%] transform -translate-x-1/2 w-[300px] h-[2px] bg-[#C7C9CA]"></div>

        {/* Certificate Details */}
        <p className="absolute top-[310px] left-[50%] transform -translate-x-1/2 text-center text-[18px] font-medium text-[#000] w-[600px]">
          For successfully passing the <span className="text-[#6E86FF] font-normal">Skill Level Test</span> with an{' '}
          <span className="font-normal text-[#6E86FF]">{level}-Level</span> (Senior Skills) in{' '}
          <span className="text-[#6E86FF] font-normal">{skill}</span>.
        </p>

        {/* Date Section */}
        <div className="absolute top-[420px] left-[168px] text-center">
          <p className="text-[16px] font-bold text-[#000]">{`${day}.${month}.${year}`}</p>
          <div className="w-[140px] h-[2px] bg-[#C7C9CA] mx-auto mt-2"></div>
          <p className="mt-2 text-[14px] font-semibold text-[#0C3C58]">DATE</p>
        </div>

        {/* Signature Section */}
        <div className="absolute top-[420px] left-[330px] text-center">
          <div className="w-[140px] h-[2px] bg-[#C7C9CA] mx-auto mt-4"></div>
          <p className="mt-2 text-[14px] font-semibold text-[#0C3C58]">SIGNATURE</p>
        </div>

        {/* Decorative Icons */}
        <div className="absolute top-[420px] left-[500px] flex space-x-4">
          <div className="w-[44px] h-[44px] bg-[#60B3FF] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-[20px] font-semibold text-white">AI</span>
          </div>
          <div className="w-[44px] h-[44px] bg-[#60B3FF] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-[20px] font-semibold text-white">CO</span>
          </div>
        </div>
      </div>
    )
  },
)
