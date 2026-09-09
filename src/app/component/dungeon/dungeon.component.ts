import { Component, OnInit } from '@angular/core';
import { DungeonService } from 'src/app/service/dungeon.service';
import { Dungeon, getDungeonsInfo, DUNGEON_ACHIEVEMENT_BITS } from './dungeon';
import { Achievement } from 'src/app/service/dungeon.service';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css']
})
export class DungeonComponent implements OnInit {

  dungeonsInfo: Dungeon[] = getDungeonsInfo();
  dungeonsNames: string[] = [];
  dungeonFrequenter: Achievement[] = [];
  dungeonDailyDone: string[] = [];
  dungeonHobbyExplorer: Achievement[] = [];
  frequenterDoneCount = 0;
  frequenterMax = 8;
  frequenterCompleted = false;
  hobbyExplorerCompleted = 0;
  hobbyExplorerMax = 40;
  hobbyExplorerPoints = 0;
  hobbyExplorerMaxPoints = 200;
  hobbyExplorerProgress = 0;
  hobbyExplorerDone = false;
  hobbyExplorerCurrent = 0;
  hobbyExplorerCurrentMax = 0;
  hobbyExplorerTotalCompleted = 0;
  loading = true;

  constructor(private dungeonService: DungeonService) { }

  async ngOnInit() {
    this.loading = true;
    try {
      this.getDungeonsNames();
      [
        this.dungeonFrequenter,
        this.dungeonDailyDone,
        this.dungeonHobbyExplorer
      ] = await Promise.all([
        this.dungeonService.getDungeonFrequenter(),
        this.dungeonService.getDungeonsDailyDone(),
        this.dungeonService.getDungeonHobbyExplorer()
      ]);
      this.updateFrequenterStatus();
      this.updateHobbyExplorerStatus();
      this.updateDungeonTable();
    } finally {
      this.loading = false;
    }
  }

  getDungeonsNames() {
    this.dungeonService.getDungeonsNames()
      .subscribe((dungeons: string[]) => {
        this.dungeonsNames = dungeons.map(dungeon =>
          this.dungeonService.formalDungeonName(dungeon)
        );
      });
  }

  updateFrequenterStatus() {

    const frequenter = this.dungeonFrequenter[0];

    if (!frequenter) {
      this.frequenterDoneCount = 0;
      this.frequenterMax = 8;
      this.frequenterCompleted = false;
      return;
    }

    this.frequenterMax = frequenter.max;

    /// Solo se considera completado si done = true y current > 0
    if (frequenter.done && frequenter.current > 0) {
      this.frequenterDoneCount = frequenter.max;
      this.frequenterCompleted = true;
    } else {
      this.frequenterDoneCount = frequenter.current;
      this.frequenterCompleted = false;
    }
  }

  updateHobbyExplorerStatus() {

    const hobbyExplorer = this.dungeonHobbyExplorer[0];

    if (!hobbyExplorer) {
      this.hobbyExplorerCompleted = 0;
      this.hobbyExplorerPoints = 0;
      this.hobbyExplorerProgress = 0;
      this.hobbyExplorerDone = false;
      this.hobbyExplorerTotalCompleted = 0;
      return;
    }

    const pointsPerCompletion = 5;
    const maxPoints = 200;

    // Veces necesarias para conseguir todos los puntos
    this.hobbyExplorerMax = maxPoints / pointsPerCompletion; // 40

    // Total real de veces completado
    this.hobbyExplorerTotalCompleted = hobbyExplorer.repeated ?? 0;

    // Progreso limitado a 40 para mostrar
    this.hobbyExplorerCompleted = Math.min(this.hobbyExplorerTotalCompleted, this.hobbyExplorerMax);

    this.hobbyExplorerPoints = this.hobbyExplorerCompleted * pointsPerCompletion;

    this.hobbyExplorerProgress = Math.min((this.hobbyExplorerPoints / maxPoints) * 100, 100);

    this.hobbyExplorerDone = this.hobbyExplorerPoints >= maxPoints;

    this.hobbyExplorerCurrent = hobbyExplorer.current;

    this.hobbyExplorerCurrentMax = hobbyExplorer.max;
  }

  updateDungeonTable() {

    const frequenterBits = this.dungeonFrequenter[0]?.bits ?? [];

    const completedFrequenter = frequenterBits
      .map(bit => DUNGEON_ACHIEVEMENT_BITS[bit])
      .filter(Boolean);

    const dailyDonePaths = (this.dungeonDailyDone ?? [])
      .map(path => this.dungeonService.normalizePathName(path));

    this.dungeonsInfo.forEach(dungeon => {
      dungeon.paths.forEach(path => {
        // Frequenter
        path.freqDone = completedFrequenter.some(done =>
          this.dungeonService.normalizePathName(done.dungeon) === this.dungeonService.normalizePathName(dungeon.name) &&
          this.dungeonService.normalizePathName(done.path) === this.dungeonService.normalizePathName(path.name)
        );
        // Daily
        path.done = dailyDonePaths.includes(
          this.dungeonService.normalizePathName(this.dungeonService.getDailyPathId(dungeon, path))
        );
      });
    });
  }

}
