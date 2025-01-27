import { UserLocation } from "@/Interfaces/Interfaces";

export const getUserLocation = (): Promise<UserLocation> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject(
        new Error("La geolocalización no es compatible con este navegador.")
      );
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        reject(
          new Error(
            "No se pudo obtener la ubicación. Asegúrate de permitir los permisos."
          )
        );
      }
    );
  });
};
