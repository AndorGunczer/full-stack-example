type PhaseProps = {
    input: number;
    setPhaseData: React.Dispatch<React.SetStateAction<string | null>>; // 🔑 Type for setState
  };

async function sendStep(id: string, setPhaseData: React.Dispatch<React.SetStateAction<string | null>>): Promise<void> {
    const url = `http://localhost:3000/phase/?phase=${id}`;

    try {
        const res = await fetch(url, { method: "GET" });

        if (!res.ok) {
            throw new Error(`HTTP-Fehler! Status: ${res.status}`);
        }

        const data = await res.json();  // JSON erst nach Status-Check parsen
        console.log("Before setPhaseData");
        setPhaseData(id);
        console.log("setPhaseData Finished");

        console.log("Erhaltene Daten:", data);

    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
    }

    // }
    // } catch (error) {
    //     console.log(`Network Error: ${error}`)
    // }
}

export default function Phase({ input, setPhaseData }: PhaseProps) {
    return (
        <div className="phase" id={input.toString()} onClick={async (e) => await sendStep(e.currentTarget.id, setPhaseData)}>
            <p>{input}</p>
        </div>
    );
}