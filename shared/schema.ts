import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name"),
  role: text("role").default("user"),
});

export const agents = pgTable("agents", {
  id: serial("id").primaryKey(),
  matricule: text("matricule").notNull().unique(),
  nom: text("nom").notNull(),
  prenom: text("prenom").notNull(),
  nomJeunefille: text("nom_jeunefille"),
  structure: text("structure").notNull(),
  compteAnalytique: text("compte_analytique").notNull(),
  type: text("type").notNull().default("SH"), // SH or Etranger
});

export const offers = pgTable("offers", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().unique(),
  libelle: text("libelle").notNull(),
});

export const regions = pgTable("regions", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().unique(),
  nom: text("nom").notNull(),
  compteAnalytique: text("compte_analytique").notNull(),
  email: text("email"),
});

export const hotels = pgTable("hotels", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().unique(),
  nom: text("nom").notNull(),
  adresse: text("adresse"),
  ville: text("ville"),
  telephone: text("telephone"),
  fax: text("fax"),
  siteInternet: text("site_internet"),
  email: text("email"),
  utilise: text("utilise").default("true"),
  etoiles: text("etoiles"),
});

export const hotelTariffs = pgTable("hotel_tariffs", {
  id: serial("id").primaryKey(),
  hotelId: serial("hotel_id"),
  annee: text("annee").notNull(),
  typeChambre: text("type_chambre").notNull(),
  tarifChambreHt: text("tarif_chambre_ht"),
  tva: text("tva"),
  tarifRest: text("tarif_rest"),
  tarifPetitdej: text("tarif_petitdej"),
  statut: text("statut"),
  observation: text("observation"),
});

export const insertUserSchema = createInsertSchema(users);
export const insertAgentSchema = createInsertSchema(agents);
export const insertOfferSchema = createInsertSchema(offers);
export const insertRegionSchema = createInsertSchema(regions);
export const insertHotelSchema = createInsertSchema(hotels);
export const insertHotelTariffSchema = createInsertSchema(hotelTariffs);

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Agent = typeof agents.$inferSelect;
export type InsertAgent = z.infer<typeof insertAgentSchema>;
export type Offer = typeof offers.$inferSelect;
export type InsertOffer = z.infer<typeof insertOfferSchema>;
export type Region = typeof regions.$inferSelect;
export type InsertRegion = z.infer<typeof insertRegionSchema>;
export type Hotel = typeof hotels.$inferSelect;
export type InsertHotel = z.infer<typeof insertHotelSchema>;
export type HotelTariff = typeof hotelTariffs.$inferSelect;
export type InsertHotelTariff = z.infer<typeof insertHotelTariffSchema>;
