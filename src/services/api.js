
export async function getVehicles() {
    try {
        const response = await fetch(
            import.meta.env.VITE_VEHICLES_API_URL || 'http://127.0.0.1:8000/cars/'
            
        );

        if (!response.ok) {
            throw new Error(`Vehicle API returned ${response.status}`);
        }

        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
            throw new Error(
                `Vehicle API returned ${contentType || 'an unknown content type'}, expected JSON`
            );
        }

        const data = await response.json();
        const vehicles = Array.isArray(data)
            ? data
            : data.results || data.value || [];

        return vehicles.map((vehicle) => ({
            id: vehicle.id,
            make: vehicle.Marka,
            model: vehicle.Modell,
            year: vehicle.EvjaratTol,
            price: vehicle.VetalAra,
            image: vehicle.image,
            mileage: vehicle.KmOra,
            combustion: vehicle.Uzemanyag,
            type: vehicle.Kivitel,
            doors: vehicle.Ajtok_szama,
            ccm: vehicle.Hengerurtartalom,
            transmission: vehicle.Automata,
            allWheelDrive: vehicle.Osszkerekes,
            climateControl: vehicle.Klima,
            description: vehicle.Allapot,
            




        }));
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        return [];
    }
}

