<?php
include 'koneksi.php';

function bookAppointment($name, $email, $phone, $booking_date) {
    global $conn;
n
    $name = mysqli_real_escape_string($conn, $name);
    $email = mysqli_real_escape_string($conn, $email);
    $phone = mysqli_real_escape_string($conn, $phone);
    $booking_date = mysqli_real_escape_string($conn, $booking_date);

    $sql = "INSERT INTO bookings (name, email, phone, booking_date) VALUES ('$name', '$email', '$phone', '$booking_date')";

    if ($conn->query($sql) === TRUE) {
        return "Booking berhasil dibuat!";
    } else {
        return "Error: " . $sql . "<br>" . $conn->error;
    }
}

$name = "John Doe";
$email = "john.doe@example.com";
$phone = "1234567890";
$booking_date = "2024-07-01";

echo bookAppointment($name, $email, $phone, $booking_date);

$conn->close();
?>
