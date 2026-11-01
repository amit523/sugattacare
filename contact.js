
document.getElementById("f").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = this;

    const name = form.elements["n"].value.trim();
    const contact = form.elements["e"].value.trim();
    const purpose = form.elements["r"].value;
    const message = form.elements["m"].value.trim();

    const recipient = "sugattacarefoundation@gmail.com";
    const subject = purpose + " - Sugatta Care Foundation";

    const body =
        "Hello Sugatta Care Foundation,\n\n" +
        "Name: " + name + "\n" +
        "Phone or Email: " + contact + "\n" +
        "I want to: " + purpose + "\n\n" +
        "Message:\n" + message + "\n\n" +
        "Regards,\n" + name;

    const mailto =
        "mailto:" + recipient +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    window.location.href = mailto;
});
