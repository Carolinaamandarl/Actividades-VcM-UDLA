ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32719").setExtent([162014.969583, 6180657.087883, 520523.834192, 6397329.363254]);
var wms_layers = [];

var format_region_metropolitana_0 = new ol.format.GeoJSON();
var features_region_metropolitana_0 = format_region_metropolitana_0.readFeatures(json_region_metropolitana_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_region_metropolitana_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_region_metropolitana_0.addFeatures(features_region_metropolitana_0);
var lyr_region_metropolitana_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_region_metropolitana_0, 
                style: style_region_metropolitana_0,
                popuplayertitle: "region_metropolitana",
                interactive: false,
                title: '<img src="styles/legend/region_metropolitana_0.png" /> region_metropolitana'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "",
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_1_0.png" /> 0<br />\
    <img src="styles/legend/_1_1.png" /> 1<br />'
        });
var format_Sede_2 = new ol.format.GeoJSON();
var features_Sede_2 = format_Sede_2.readFeatures(json_Sede_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Sede_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sede_2.addFeatures(features_Sede_2);
var lyr_Sede_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sede_2, 
                style: style_Sede_2,
                popuplayertitle: "Sede",
                interactive: true,
                title: '<img src="styles/legend/Sede_2.png" /> Sede'
            });
var format_provincia_metropolitana_3 = new ol.format.GeoJSON();
var features_provincia_metropolitana_3 = format_provincia_metropolitana_3.readFeatures(json_provincia_metropolitana_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_provincia_metropolitana_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provincia_metropolitana_3.addFeatures(features_provincia_metropolitana_3);
var lyr_provincia_metropolitana_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_provincia_metropolitana_3, 
                style: style_provincia_metropolitana_3,
                popuplayertitle: "provincia_metropolitana",
                interactive: false,
                title: '<img src="styles/legend/provincia_metropolitana_3.png" /> provincia_metropolitana'
            });

lyr_region_metropolitana_0.setVisible(true);lyr__1.setVisible(true);lyr_Sede_2.setVisible(true);lyr_provincia_metropolitana_3.setVisible(true);
var layersList = [lyr_region_metropolitana_0,lyr__1,lyr_Sede_2,lyr_provincia_metropolitana_3];
lyr_region_metropolitana_0.set('fieldAliases', {'objectid': 'objectid', 'cir_sena': 'cir_sena', 'codregion': 'codregion', 'area_km': 'area_km', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', });
lyr__1.set('fieldAliases', {'objectid': 'objectid', 'shape_leng': 'shape_leng', 'dis_elec': 'dis_elec', 'cir_sena': 'cir_sena', 'cod_comuna': 'cod_comuna', 'codregion': 'codregion', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', 'Comuna': 'Comuna', 'Provincia': 'Provincia', 'Act.Comuna': 'Act.Comuna', 'Núm.Actividades': 'Núm.Actividades', 'Núm.Estudiantes': 'Núm.Estudiantes', 'Núm.Academicos ': 'Núm.Academicos ', 'Núm.Colaboradores': 'Núm.Colaboradores', 'Núm.Egresados': 'Núm.Egresados', 'Núm.Empleadores': 'Núm.Empleadores', 'Núm.Beneficiarios': 'Núm.Beneficiarios', 'Núm.Atenciones': 'Núm.Atenciones', 'Núm.Visitas': 'Núm.Visitas', 'Unidad Responsable': 'Unidad Responsable', });
lyr_Sede_2.set('fieldAliases', {'id': 'id', 'Comuna': 'Comuna', 'Dirección': 'Dirección', 'X': 'X', 'Y': 'Y', });
lyr_provincia_metropolitana_3.set('fieldAliases', {'objectid': 'objectid', 'cir_sena': 'cir_sena', 'codregion': 'codregion', 'cod_prov': 'cod_prov', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Provincia': 'Provincia', 'Region': 'Region', });
lyr_region_metropolitana_0.set('fieldImages', {'objectid': 'TextEdit', 'cir_sena': 'Range', 'codregion': 'Range', 'area_km': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', });
lyr__1.set('fieldImages', {'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'dis_elec': 'Range', 'cir_sena': 'Range', 'cod_comuna': 'Range', 'codregion': 'Range', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', 'Comuna': 'TextEdit', 'Provincia': 'TextEdit', 'Act.Comuna': 'TextEdit', 'Núm.Actividades': 'Range', 'Núm.Estudiantes': 'Range', 'Núm.Academicos ': 'Range', 'Núm.Colaboradores': 'Range', 'Núm.Egresados': 'Range', 'Núm.Empleadores': 'Range', 'Núm.Beneficiarios': 'Range', 'Núm.Atenciones': 'Range', 'Núm.Visitas': 'Range', 'Unidad Responsable': 'TextEdit', });
lyr_Sede_2.set('fieldImages', {'id': 'Range', 'Comuna': 'TextEdit', 'Dirección': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_provincia_metropolitana_3.set('fieldImages', {'objectid': 'TextEdit', 'cir_sena': 'Range', 'codregion': 'Range', 'cod_prov': 'Range', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Provincia': 'TextEdit', 'Region': 'TextEdit', });
lyr_region_metropolitana_0.set('fieldLabels', {'objectid': 'no label', 'cir_sena': 'no label', 'codregion': 'no label', 'area_km': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'Region': 'no label', });
lyr__1.set('fieldLabels', {'objectid': 'hidden field', 'shape_leng': 'hidden field', 'dis_elec': 'hidden field', 'cir_sena': 'hidden field', 'cod_comuna': 'hidden field', 'codregion': 'hidden field', 'st_area_sh': 'hidden field', 'st_length_': 'hidden field', 'Region': 'hidden field', 'Comuna': 'inline label - always visible', 'Provincia': 'hidden field', 'Act.Comuna': 'hidden field', 'Núm.Actividades': 'inline label - visible with data', 'Núm.Estudiantes': 'inline label - visible with data', 'Núm.Academicos ': 'inline label - visible with data', 'Núm.Colaboradores': 'inline label - visible with data', 'Núm.Egresados': 'inline label - visible with data', 'Núm.Empleadores': 'inline label - visible with data', 'Núm.Beneficiarios': 'inline label - visible with data', 'Núm.Atenciones': 'inline label - visible with data', 'Núm.Visitas': 'inline label - visible with data', 'Unidad Responsable': 'inline label - visible with data', });
lyr_Sede_2.set('fieldLabels', {'id': 'hidden field', 'Comuna': 'inline label - visible with data', 'Dirección': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_provincia_metropolitana_3.set('fieldLabels', {'objectid': 'no label', 'cir_sena': 'no label', 'codregion': 'no label', 'cod_prov': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'Provincia': 'no label', 'Region': 'no label', });
lyr_provincia_metropolitana_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});