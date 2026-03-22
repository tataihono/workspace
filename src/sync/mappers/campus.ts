import type { RockCampus } from '@/lib/rock-api'

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function mapRockCampus(rock: RockCampus) {
  const attrs = rock.AttributeValues || {}
  return {
    name: rock.Name,
    slug: slugify(rock.Name),
    rockId: rock.Id,
    address: {
      street: rock.Location?.Street1 || '',
      city: rock.Location?.City || '',
      postalCode: rock.Location?.PostalCode || '',
    },
    geoPoint: rock.Location?.GeoPoint
      ? {
          lat: rock.Location.GeoPoint.Latitude,
          lng: rock.Location.GeoPoint.Longitude,
        }
      : undefined,
    googlePlaceId: rock.Location?.GooglePlaceId || '',
    serviceTimes: rock.ServiceTimes || '',
    order: rock.Order,
    isActive: rock.IsActive,
    establishmentYear: attrs.EstablishmentYear
      ? parseInt(attrs.EstablishmentYear.Value, 10)
      : undefined,
    // Image GUIDs for the image sync pipeline to process
    _imageGuids: {
      featuredImage: attrs.FeaturedImage?.Value || null,
      slideImages: [
        attrs.SlideImage1?.Value,
        attrs.SlideImage2?.Value,
        attrs.SlideImage3?.Value,
        attrs.SlideImage4?.Value,
      ].filter(Boolean) as string[],
    },
    lastSyncedAt: new Date().toISOString(),
  }
}
