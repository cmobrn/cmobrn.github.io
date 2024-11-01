function MapEmbed() {
    return (
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.9274578313034!2d5.364481076747909!3d51.73436217186588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6f01c6c3e9503%3A0x5bfcbf69efa5eed1!2sPauwoogpad%2017%2C%205247%20KK%20Rosmalen!5e0!3m2!1sen!2snl!4v1730498821415!5m2!1sen!2snl"
          width="100%"
            height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
  
  export default MapEmbed;
  