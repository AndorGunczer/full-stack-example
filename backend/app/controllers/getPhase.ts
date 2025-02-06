import mysql from "mysql2"

export interface PhaseData {
    first_name: string,
    last_name: string,
    vin: string,
    phase: string
}

// id INT AUTO_INCREMENT PRIMARY KEY,
// first_name_name VARCHAR(20),
// last_name_name VARCHAR(20),
// car_id INT REFERENCES car_info(id),
// phase INT

export async function setPhase(phaseId: number): Promise<boolean> {
    const connection = mysql.createConnection({
        host: '192.168.10.4',
        user: 'root',
        password: 'test',
        database: 'mr'
    })

    try {
        connection.connect()

        const query: string = `UPDATE user_info SET phase_id = (SELECT id FROM phase_info WHERE phase = "phase${phaseId}") WHERE id = 1`;

        await connection.execute(query)
        connection.end();
        return true;
    } catch (err) {
        console.log(err);
        connection.end();
        return false;
    }
}

export async function getPhase(): Promise<PhaseData | null>{
    let phaseData: PhaseData | null = null;

    const connection = mysql.createConnection({
        host: '192.168.10.4',
        user: 'root',
        password: 'test',
        database: 'mr'
      })
      
     //   phaseData = 
        try {
            connection.connect()
            // const query: string = 'SELECT first_name, last_name FROM user_info WHERE id = 1';
            const query: string = 'SELECT u.first_name, u.last_name, c.vin, p.phase FROM user_info u INNER JOIN car_info c ON u.car_id = c.id INNER JOIN phase_info p ON u.phase_id = p.id WHERE u.id = 1';
            console.log("BEFORE QUERY");
            // const rows: PhaseData = 
            const rows = await connection.execute(query, function(err, rows: PhaseData[]) {
                console.log(rows[0]);
                phaseData = rows[0];
            });
            console.log("AFTER QUERY");
            // phaseData = rows[0];
            connection.end();
            return phaseData!;
        } catch (error) {
            console.log(error);
            connection.end();
            return null;
        }
}