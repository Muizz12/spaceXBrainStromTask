import axios from "axios";

export const getData = async () => {
  try {
    let result = await axios?.get("https://api.spacexdata.com/v3/capsules");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getOneCapsule = async (capsule_serial: string) => {
  try {
    let result = await axios?.get(
      `https://api.spacexdata.com/v3/capsules/${capsule_serial}`
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
