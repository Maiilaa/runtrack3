$(document).ready(function() {
    const images = [
      'logo1.PNG', 'logo2.PNG', 'logo7.PNG',
      'logo9.PNG', 'logo3.PNG', 'logo8.PNG',
      'logo4.PNG', 'logo5.PNG', 'logo6.PNG'
    ];
  
    let tiles = [...images]; 
    let emptyIndex = 8; 
  
    function shuffleTiles() {
      for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
      }
      emptyIndex = tiles.indexOf('');
    }
  
    function isPuzzleSolved() {
      for (let i = 0; i < images.length - 1; i++) {
        if (tiles[i] !== images[i]) return false;
      }
      return true;
    }
  
    function showWinMessage() {
      $('#message').show().text('Vous avez gagné !').css('color', 'green');
      $('#puzzle-container').css('pointer-events', 'none'); 
      $('#restart-btn').show();
    }
  
    function createPuzzleGrid() {
      $('#puzzle-container').empty();
      tiles.forEach((tile, index) => {
        const tileElement = $('<div></div>').addClass('tile');
        if (tile !== 'image9.png') {
          const img = $('<img>').attr('src', tile);
          tileElement.append(img);
        }
        tileElement.on('click', function() {
          moveTile(index);
        });
        $('#puzzle-container').append(tileElement);
      });
    }
  
    
    function moveTile(index) {
      const possibleMoves = [
        emptyIndex - 3, 
        emptyIndex + 3, 
        emptyIndex - 1, 
        emptyIndex + 1  
      ];
  
      if (possibleMoves.includes(index) && index >= 0 && index < 9) {
        [tiles[emptyIndex], tiles[index]] = [tiles[index], tiles[emptyIndex]];
        emptyIndex = index;
        createPuzzleGrid();
  
        if (isPuzzleSolved()) {
          showWinMessage();
        }
      }
    }

    $('#restart-btn').on('click', function() {
      shuffleTiles();
      createPuzzleGrid();
      $('#message').hide();
      $('#puzzle-container').css('pointer-events', 'auto');
      $('#restart-btn').hide();
    });
  
    shuffleTiles();
    createPuzzleGrid();
  });
  