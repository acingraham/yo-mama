/**
 * An object with text to speech functionality. We're adding the Speak class to
 * the window, which means it's globally available for other modules.
 */
window.Speak = (function () {
    /**
     * PRIVATE VARIABLES
     * -----------------
     */
    // A browser check to make sure text to speech is supported
    var textToSpeechIsEnabled = 'speechSynthesis' in window;

    /**
     * PRIVATE METHODS
     * -----------------
     */

    /**
     * Uses text to voice javascript API to speak a string of text
     * @param {string} text Some text for the device to speak
     * @private
     */
    function sayText(text) {
        var message;

        // First check to see if the device supports text to speech
        if (textToSpeechIsEnabled) {
            // Create a new speech message
            message = new window.SpeechSynthesisUtterance(text);
            // Use the speech API to speak the message
            window.speechSynthesis.speak(message);
        }
    }

    /**
     * PUBLIC METHODS
     * ----------------
     */
    return {
        say: sayText
    };
})();
