
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace APIdemo
{
    public static  class ServiceExtencion
    {
        /// <summary>
        /// Metodo para agregar la configuración de la politica de servicios CORS
        /// </summary>
        /// <param name="services">Referencia del tipo IServiceCollection a extender</param>
        public static void AddConfigurationCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.WithOrigins("http://localhost:8086")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });
        }
    }
}
