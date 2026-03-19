// Define a common options block to avoid repetition
const commonOptions = {
    trustedConnection: true,
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true
};

export const databaseConfigs: any = {
    // Your current working setup
    localDev: {
        server: 'localhost',
        database: 'personalwebsite',
        options: commonOptions
    },
    
    postgreLocal: {
        user: 'postgres',           // The default superuser
        host: 'localhost',
        database: 'JobApplication',   // Whatever you named it in pgAdmin
        password: 'IAmAfghan@32!', // The password you set during install
        port: 5432,                 // Default Postgres port
    },

    // Example: A different database for testing
    staging: {
        server: 'babadtp', 
        database: 'test_website',
        options: commonOptions
    },

    // Example: Salon Project Database
    salonDb: {
        server: 'localhost',
        database: 'MahlahaSalon',
        options: commonOptions
    }
};