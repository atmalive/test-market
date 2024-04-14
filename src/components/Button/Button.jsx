
export const Button = ({size = 'full', title, onClick }) => {


    const handleClick = () => {

    }

    return (
        <button
            className={`w-${size} max-w-[300px] min-w-16 sm:max-w-[270px] h-14 text-2xl text-[F0F0F0] bg-[#222] rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 mt-auto`}
            onClick={onClick}
        >
            {title}
        </button>
    )
}
