$('#btnSalvarGrupoMaquinaOP').click(function (event) {
    const modal = bootstrap.Modal.getOrCreateInstance('#modal');
    event.preventDefault();

    modal.hide();
    // atualizar grupo maquina OP
    var lastPos = 10;
    var newTela = new Array();

    $('#cboGrupoMaquinaSelecionadasOP option').each(function () {
        var found = -1;
        var idGrupoMaquina = $(this).val() * 1;
        for (var j = 0; j < _tela.length; j++) {
            if (_tela[j].idGrupoMaquina == idGrupoMaquina && _tela[j].tipo == "grupoOP") {
                found = j;
                break;
            }
        }
        if (found >= 0) {
            newTela.push(_tela[found]);
        } else {
            for (var j = 0; j < _listaGrupoMaquinaOP.length; j++) {
                if (_listaGrupoMaquinaOP[j].idGrupoMaquina == idGrupoMaquina) {
                    var grupoOP = _listaGrupoMaquinaOP[j];
                    grupoOP.tipo = "grupoOP";
                    grupoOP.descGrupoMaquina = _listaGrupoMaquinaOP[j].descricao;
                    grupoOP.posX = lastPos;
                    grupoOP.posY = lastPos;
                    newTela.push(grupoOP);
                    lastPos += 10;
                    break;
                }
            }
        }
    });

    for (var j = 0; j < _tela.length; j++) {
        if (_tela[j].tipo == "maq") {
            newTela.push(_tela[j]);
        }

        if (_tela[j].tipo == "grupoTurno") {
            newTela.push(_tela[j]);
        }

        if (_tela[j].tipo == "grupoDia") {
            newTela.push(_tela[j]);
        }

        if (_tela[j].tipo == "grupoMes") {
            newTela.push(_tela[j]);
        }
    }
    _tela = newTela;
    SalvarPosicoes();
    CarregarTela();

    return false;
});


$('#btnSalvarGrupoMaquinaTurno').click(function (event) {
    const modal = bootstrap.Modal.getOrCreateInstance('#modal');
    event.preventDefault();

    modal.hide();
    // atualizar grupo maquina Turno
    var lastPos = 10;
    var newTela = new Array();

    $('#cboGrupoMaquinaSelecionadasTurno option').each(function () {
        var found = -1;
        var idGrupoMaquina = $(this).val() * 1;
        for (var j = 0; j < _tela.length; j++) {
            if (_tela[j].idGrupoMaquina == idGrupoMaquina && _tela[j].tipo == "grupoTurno") {
                found = j;
                break;
            }
        }
        if (found >= 0) {
            newTela.push(_tela[found]);
        } else {
            for (var j = 0; j < _listaGrupoMaquinaTurno.length; j++) {
                if (_listaGrupoMaquinaTurno[j].idGrupoMaquina == idGrupoMaquina) {
                    var grupoTurno = _listaGrupoMaquinaTurno[j];
                    grupoTurno.tipo = "grupoTurno";
                    grupoTurno.descGrupoMaquina = _listaGrupoMaquinaTurno[j].descricao;
                    grupoTurno.posX = lastPos;
                    grupoTurno.posY = lastPos;
                    newTela.push(grupoTurno);
                    lastPos += 10;
                    break;
                }
            }
        }
    });

    for (var j = 0; j < _tela.length; j++) {
        if (_tela[j].tipo == "maq") {
            newTela.push(_tela[j]);
        }

        if (_tela[j].tipo == "grupoOP") {
            newTela.push(_tela[j]);
        }

        if (_tela[j].tipo == "grupoDia") {
            newTela.push(_tela[j]);
        }

        if (_tela[j].tipo == "grupoMes") {
            newTela.push(_tela[j]);
        }
    }
    _tela = newTela;
    SalvarPosicoes();
    CarregarTela();

    return false;
});

$('#btnSalvarGrupoMaquinaDia').click(function (event)	{
    const modal = bootstrap.Modal.getOrCreateInstance('#modal');
    event.preventDefault();

    modal.hide();
    // atualizar grupo maquina dia atual
    var lastPos = 10;
    var newTela = new Array();

    $('#cboGrupoMaquinaSelecionadasDia option').each(function () {
        var found = -1;
        var idGrupoMaquina = $(this).val() * 1;
        for (var j = 0; j < _tela.length; j++) {
            if (_tela[j].idGrupoMaquina == idGrupoMaquina && _tela[j].tipo == "grupoDia") {
                found = j;
                break;
            }
        }
        if (found >= 0) {
            newTela.push(_tela[found]);
        } else {
            for (var j = 0; j < _listaGrupoMaquinaDia.length; j++) {
                if (_listaGrupoMaquinaDia[j].idGrupoMaquina == idGrupoMaquina) {
                    var grupoDia = _listaGrupoMaquinaDia[j];
                    grupoDia.tipo = "grupoDia";
                    grupoDia.descGrupoMaquina = _listaGrupoMaquinaDia[j].descricao;
                    grupoDia.posX = lastPos;
                    grupoDia.posY = lastPos;
                    newTela.push(grupoDia);
                    lastPos += 10;
                    break;
                }
            }
        }
    });

    for (var j = 0; j < _tela.length; j++) {
        if (_tela[j].tipo == "maq") {
            newTela.push(_tela[j]);
        }

        if (_tela[j].tipo == "grupoOP") {
            newTela.push(_tela[j]);
        }

        if (_tela[j].tipo == "grupoTurno") {
            newTela.push(_tela[j]);
        }

        if (_tela[j].tipo == "grupoMes") {
            newTela.push(_tela[j]);
        }
    }
    _tela = newTela;
    SalvarPosicoes();
    CarregarTela();

    return false;
});

$('#btnSalvarGrupoMaquinaMes').click(function (event) {
    const modal = bootstrap.Modal.getOrCreateInstance('#modal');
    event.preventDefault();

    modal.hide();
    // atualizar grupo maquina mes atual
    var lastPos = 10;
    var newTela = new Array();

    $('#cboGrupoMaquinaSelecionadasMes option').each(function () {
        var found = -1;
        var idGrupoMaquina = $(this).val() * 1;
        for (var j = 0; j < _tela.length; j++) {
            if (_tela[j].idGrupoMaquina == idGrupoMaquina && _tela[j].tipo == "grupoMes") {
                found = j;
                break;
            }
        }
        if (found >= 0) {
            newTela.push(_tela[found]);
        } else {
            for (var j = 0; j < _listaGrupoMaquinaMes.length; j++) {
                if (_listaGrupoMaquinaMes[j].idGrupoMaquina == idGrupoMaquina) {
                    var grupoMes = _listaGrupoMaquinaMes[j];
                    grupoMes.tipo = "grupoMes";
                    grupoMes.descGrupoMaquina = _listaGrupoMaquinaMes[j].descricao;
                    grupoMes.posX = lastPos;
                    grupoMes.posY = lastPos;
                    newTela.push(grupoMes);
                    lastPos += 10;
                    break;
                }
            }
        }
    });

    for (var j = 0; j < _tela.length; j++) {
        if (_tela[j].tipo == "maq") {
            newTela.push(_tela[j]);
        }

        if (_tela[j].tipo == "grupoOP") {
            newTela.push(_tela[j]);
        }

        if (_tela[j].tipo == "grupoTurno") {
            newTela.push(_tela[j]);
        }

        if (_tela[j].tipo == "grupoDia") {
            newTela.push(_tela[j]);
        }
    }
    _tela = newTela;
    SalvarPosicoes();
    CarregarTela();

    return false;
});