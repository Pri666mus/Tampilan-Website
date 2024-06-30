const form = document.getElementById("booking-form");
        const queueContainer = document.getElementById("queue-container");
        const downloadBtn = document.getElementById("download-btn");
        let queue = [];

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const service = document.getElementById("service").value;
            const date = document.getElementById("date").value;

            const booking = {
                name: name,
                email: email,
                service: service,
                date: date
            };

            queue.push(booking);

            displayQueue();
            downloadBtn.style.display = "block";

            // Clear the form inputs
            form.reset();
        });

        downloadBtn.addEventListener("click", function() {
            const queueText = generateQueueText();
            const textFile = new Blob([queueText], { type: "text/plain" });
            const fileName = "booking_queue.txt";
            const downloadLink = document.createElement("a");
            downloadLink.download = fileName;
            downloadLink.href = window.URL.createObjectURL(textFile);
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });

        function displayQueue() {
            queueContainer.innerHTML = "";

            for (let i = 0; i < queue.length; i++) {
                const booking = queue[i];
                const output = `
                    <div class="queue-item">
                        <h4>Antrian ${i + 1}</h4>
                        <p>Nama: ${booking.name}</p>
                        <p>Email: ${booking.email}</p>
                        <p>Layanan: ${booking.service}</p>
                        <p>Tanggal: ${booking.date}</p>
                    </div>
                `;
                queueContainer.innerHTML += output;
            }
        }

        function generateQueueText() {
            let queueText = "Antrian Booking Barbershop:\n\n";

            for (let i = 0; i < queue.length; i++) {
                const booking = queue[i];
                queueText += `Antrian ${i + 1}:\n`;
                queueText += `Nama: ${booking.name}\n`;
                queueText += `Email: ${booking.email}\n`;
                queueText += `Layanan: ${booking.service}\n`;
                queueText += `Tanggal: ${booking.date}\n\n`;
            }

            return queueText;
        }