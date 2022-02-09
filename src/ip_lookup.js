const ip_lookup = async () => {
  let response = await fetch('https://json.geoiplookup.io/')

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let ip_data = await response.json();

  console.log(ip_data)

  return { 'ip': ip_data.ip, 'country': ip_data.country_name };
}

export default ip_lookup;
