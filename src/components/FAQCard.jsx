function FAQCard({ question, answer }) {
    return (
        <div className="flex flex-col justify-center bg-white rounded-2xl p-6 shadow-md space-y-4">
            <h3 className="font-bold text-lg">{question}</h3>
            <p className="light-color">{answer}</p>
        </div>
    );
}

export default FAQCard;