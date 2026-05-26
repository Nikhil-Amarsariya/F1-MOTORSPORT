export async function fetchDrivers() {
  const response = await fetch(
    "https://api.openf1.org/v1/drivers?session_key=9158"
  );

  const data = await response.json();

  return data;
}


    
                    //  https://www.formula1.com/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png.transform/1col/image.png




                      
