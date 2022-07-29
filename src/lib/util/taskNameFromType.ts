import { activity_type_enum } from '@prisma/client';

import { Tasks } from '../constants';

export function taskNameFromType(activityType: activity_type_enum): Tasks {
	switch (activityType) {
		case 'Agility':
			return Tasks.AgilityActivity;
		case 'ClueCompletion':
			return Tasks.ClueActivity;
		case 'Cooking':
			return Tasks.CookingActivity;
		case 'MonsterKilling':
			return Tasks.MonsterActivity;
		case 'GroupMonsterKilling':
			return Tasks.GroupMonsterActivity;
		case 'Fishing':
			return Tasks.FishingActivity;
		case 'Mining':
			return Tasks.MiningActivity;
		case 'Smelting':
			return Tasks.SmeltingActivity;
		case 'Smithing':
			return Tasks.SmithingActivity;
		case 'Woodcutting':
			return Tasks.WoodcuttingActivity;
		case 'Firemaking':
			return Tasks.FiremakingActivity;
		case 'Crafting':
			return Tasks.CraftingActivity;
		case 'Questing':
			return Tasks.QuestingActivity;
		case 'Runecraft':
			return Tasks.RunecraftActivity;
		case 'Burying':
			return Tasks.BuryingActivity;
		case 'Offering':
			return Tasks.OfferingActivity;
		case 'FightCaves':
			return Tasks.FightCavesActivity;
		case 'Fletching':
			return Tasks.FletchingActivity;
		case 'Wintertodt':
			return Tasks.WintertodtActivity;
		case 'Tempoross':
			return Tasks.TemporossActivity;
		case 'Alching':
			return Tasks.AlchingActivity;
		case 'Raids':
			return Tasks.RaidsActivity;
		case 'Herblore':
			return Tasks.HerbloreActivity;
		case 'Nightmare':
			return Tasks.NightmareActivity;
		case 'AnimatedArmour':
			return Tasks.AnimatedArmourActivity;
		case 'Cyclops':
			return Tasks.CyclopsActivity;
		case 'Sawmill':
			return Tasks.SawmillActivity;
		case 'Sepulchre':
			return Tasks.SepulchreActivity;
		case 'Plunder':
			return Tasks.PlunderActivity;
		case 'FishingTrawler':
			return Tasks.FishingTrawler;
		case 'Zalcano':
			return Tasks.ZalcanoActivity;
		case 'Pickpocket':
			return Tasks.PickpocketActivity;
		case 'Farming':
			return Tasks.FarmingActivity;
		case 'TitheFarm':
			return Tasks.TitheFarmActivity;
		case 'BarbarianAssault':
			return Tasks.BarbarianAssault;
		case 'AgilityArena':
			return Tasks.AgilityArena;
		case 'ChampionsChallenge':
			return Tasks.ChampionsChallenge;
		case 'Hunter':
			return Tasks.HunterActivity;
		case 'Birdhouse':
			return Tasks.BirdhouseActivity;
		case 'AerialFishing':
			return Tasks.AerialFishingActivity;
		case 'DriftNet':
			return Tasks.DriftNetActivity;
		case 'Construction':
			return Tasks.ConstructionActivity;
		case 'MahoganyHomes':
			return Tasks.MahoganyHomes;
		case 'Nex':
			return Tasks.NexActivity;
		case 'Enchanting':
			return Tasks.Enchanting;
		case 'Casting':
			return Tasks.Casting;
		case 'GloryCharging':
			return Tasks.GloryCharging;
		case 'WealthCharging':
			return Tasks.WealthCharging;
		case 'GnomeRestaurant':
			return Tasks.GnomeRestaurant;
		case 'SoulWars':
			return Tasks.SoulWars;
		case 'RoguesDenMaze':
			return Tasks.RoguesDenMaze;
		case 'KalphiteKing':
			return Tasks.KalphiteKing;
		case 'Gauntlet':
			return Tasks.Gauntlet;
		case 'Dungeoneering':
			return Tasks.Dungeoneering;
		case 'CastleWars':
			return Tasks.CastleWars;
		case 'MageArena':
			return Tasks.MageArena;
		case 'Collecting':
			return Tasks.Collecting;
		case 'MageTrainingArena':
			return Tasks.MageTrainingArena;
		case 'KingGoldemar':
			return Tasks.KingGoldemar;
		case 'VasaMagus':
			return Tasks.VasaMagus;
		case 'OuraniaDeliveryService':
			return Tasks.OuraniaDeliveryService;
		case 'MageArena2':
			return Tasks.MageArena2;
		case 'BigChompyBirdHunting':
			return Tasks.BigChompyBirdHunting;
		case 'DarkAltar':
			return Tasks.DarkAltar;
		case 'Ignecarus':
			return Tasks.Ignecarus;
		case 'Trekking':
			return Tasks.TrekkingActivity;
		case 'KibbleMaking':
			return Tasks.KibbleActivity;
		case 'Revenants':
			return Tasks.RevenantsActivity;
		case 'PestControl':
			return Tasks.PestControl;
		case 'VolcanicMine':
			return Tasks.VolcanicMine;
		case 'MonkeyRumble':
			return Tasks.MonkeyRumble;
		case 'TrickOrTreat':
			return Tasks.TrickOrTreat;
		case 'BossEvent':
			return Tasks.BossEvent;
		case 'KourendFavour':
			return Tasks.KourendFavour;
		case 'Inferno':
			return Tasks.Inferno;
		case 'TearsOfGuthix':
			return Tasks.TearsOfGuthix;
		case 'TheatreOfBlood':
			return Tasks.ToB;
		case 'FishingContest':
			return Tasks.FishingContest;
		case 'LastManStanding':
			return Tasks.LastManStanding;
		case 'BirthdayEvent':
			return Tasks.BirthdayEvent;
		case 'TokkulShop':
			return Tasks.TokkulShop;
		case 'BaxtorianBathhouses':
			return Tasks.BaxtorianBathhouses;
		case 'TroubleBrewing':
			return Tasks.TroubleBrewing;
		case 'Disassembling':
			return Tasks.Disassembling;
		case 'Research':
			return Tasks.Research;
		case 'Moktang':
			return Tasks.Moktang;
		case 'Easter':
		case 'BlastFurnace':
			return Tasks.REMOVED;
	}
}
